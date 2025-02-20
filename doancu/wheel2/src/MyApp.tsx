import { Editor } from "@monaco-editor/react";
import BiotechIcon from "@mui/icons-material/Biotech";
import DescriptionIcon from "@mui/icons-material/Description";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import FoundationIcon from "@mui/icons-material/Foundation";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyIcon from "@mui/icons-material/Key";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { editor } from "monaco-editor";
import {
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Control, Controller, useForm } from "react-hook-form";
import useDeobfuscatorWorker from "./employer";
import NameList from "./NameList";
import UrlForm from "./UrlForm";
// import "./monaco";
type MonacoEditor = editor.IStandaloneCodeEditor;

export interface MyFormProps {
  original: string;
  clairvoyance: string;
  snap: string;
  reinit: string;
  scripter: string;
  deobfuscated: string;
  patched: string;
  userscript: string;
  nameList: { value: string }[];
}

export default function MyApp() {
  const [tabIndex, setTabIndex] = useState(0);
  const editorOriginalRef = useRef<MonacoEditor | null>(null);
  const editorClairvoyanceRef = useRef<MonacoEditor | null>(null);
  const editorSnapRef = useRef<MonacoEditor | null>(null);
  const editoReinitRef = useRef<MonacoEditor | null>(null);
  const editorScripterRef = useRef<MonacoEditor | null>(null);
  const editorDeobfuscatedRef = useRef<MonacoEditor | null>(null);
  const editorPatchedRef = useRef<MonacoEditor | null>(null);
  const editorUserscriptRef = useRef<MonacoEditor | null>(null);
  const {
    handleSubmit: handleSubmitForm,
    reset: clearForm,
    control: controlForm,
  } = useForm<MyFormProps>({
    defaultValues: {
      original: "",
      clairvoyance: "",
      snap: "",
      reinit: "",
      scripter: "",
      deobfuscated: "",
      patched: "",
      userscript: "",
      nameList: [],
    },
  });
  const formDataRef = useRef<MyFormProps | null>(null);
  const deobfuscateRequest = useDeobfuscatorWorker(async (response) => {
    const { success, deobfuscatedCode, error } = response;
    if (!success || error) {
      console.error(response);
      throw new Error("Deobfuscation unsuccessful");
    }
    if (!deobfuscatedCode) {
      console.error(deobfuscatedCode);
      throw new Error("Deobfuscated code is invalid");
    }
    editorDeobfuscatedRef.current?.setValue(deobfuscatedCode);
    if (!formDataRef.current) {
      throw new Error("Sanity fail: formData null after deobfuscateRequest");
    }
    const { clairvoyance, snap, reinit, scripter, nameList } =
      formDataRef.current;
    console.log("[MyApp] lazy loading patcher");
    const { translate } = await import("./patcher");
    const { patchedAsSource, patchedAsUserscript } = await translate(
      deobfuscatedCode,
      clairvoyance,
      snap,
      reinit,
      scripter,
      nameList.map((o) => o.value)
    );
    editorPatchedRef.current?.setValue(patchedAsSource);
    editorUserscriptRef.current?.setValue(patchedAsUserscript);
    setTabIndex(8);
    setIsLoading(false);
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    handleSubmitForm((data) => {
      formDataRef.current = data;
      const { original } = data;
      deobfuscateRequest({ code: original });
    })();
  };
  const [urlFormOpen, setUrlFormOpen] = useState(false);
  const urlFormRef = useRef("");
  const { refetch: fetchUrlForm } = useQuery({
    enabled: false,
    staleTime: 0,
    queryKey: ["urlForm", urlFormRef.current],
    queryFn: async () => {
      console.debug(`[download] Downloading ${urlFormRef.current}`);
      const response = await axios.get(urlFormRef.current, {
        responseType: "text",
      });
      console.debug(`[download] Downloaded ${urlFormRef.current}`, response);
      if (response.data) {
        urlFormRef.current = "";
        editorOriginalRef.current?.setValue(response.data);
        setTabIndex(0);
        return response.data;
      }
    },
  });
  return (
    <>
      <Stack
        direction="row"
        alignItems="stretch"
        gap={2}
        sx={{ width: "100%" }}
      >
        <Tabs
          value={tabIndex}
          onChange={(_, newTabIndex) => setTabIndex(newTabIndex)}
          orientation="vertical"
        >
          <EditorTab label="Original" icon={<FoundationIcon />} />
          <EditorTab label="Clairvoyance" icon={<BiotechIcon />} />
          <EditorTab label="Snap" icon={<GpsFixedIcon />} />
          <EditorTab label="Reinit" icon={<RunningWithErrorsIcon />} />
          <EditorTab label="Scripter" icon={<DescriptionIcon />} />
          <EditorTab label="Targets" icon={<RecentActorsIcon />} />
          <EditorTab label="Deobfuscated" icon={<SanitizerIcon />} />
          <EditorTab label="Patched" icon={<FindReplaceIcon />} />
          <EditorTab label="Userscript" icon={<KeyIcon />} />
        </Tabs>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <EditorTabPanel
            index={0}
            displayIndex={tabIndex}
            editorRef={editorOriginalRef}
            defaultFiles={[/*"wheel.deob.js.txt",*/ "wheel.min.js.txt"]}
            name="original"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={1}
            displayIndex={tabIndex}
            editorRef={editorClairvoyanceRef}
            defaultFiles={["wheel.patch.js.txt"]}
            name="clairvoyance"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={2}
            displayIndex={tabIndex}
            editorRef={editorSnapRef}
            defaultFiles={["wheel.patch2.js.txt"]}
            name="snap"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={3}
            displayIndex={tabIndex}
            editorRef={editoReinitRef}
            defaultFiles={["wheel.patch3.js.txt"]}
            name="reinit"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={4}
            displayIndex={tabIndex}
            editorRef={editorScripterRef}
            defaultFiles={["wheel.scripter.js.txt"]}
            name="scripter"
            control={controlForm}
          ></EditorTabPanel>
          <div hidden={tabIndex !== 5} style={{ height: "100%" }}>
            <NameList control={controlForm}></NameList>
          </div>
          <EditorTabPanel
            index={6}
            displayIndex={tabIndex}
            readOnly
            editorRef={editorDeobfuscatedRef}
            name="deobfuscated"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={7}
            displayIndex={tabIndex}
            readOnly
            editorRef={editorPatchedRef}
            name="patched"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={8}
            displayIndex={tabIndex}
            readOnly
            editorRef={editorUserscriptRef}
            name="userscript"
            control={controlForm}
          ></EditorTabPanel>
        </Box>
        <Stack gap={2} justifyContent={"flex-start"}>
          <Button onClick={handleSubmit} variant={"contained"}>
            Submit
          </Button>
          <Button
            onClick={() => {
              clearForm();
              setTabIndex(0);
            }}
            variant={"outlined"}
          >
            Clear
          </Button>
          <Button onClick={() => setUrlFormOpen(true)}>Read URL</Button>
          {isLoading && (
            <Stack alignItems="center">
              <CircularProgress disableShrink size={"3em"} />
            </Stack>
          )}
        </Stack>
      </Stack>
      <UrlForm
        open={urlFormOpen}
        onClose={() => setUrlFormOpen(false)}
        onAccept={({ url }) => {
          urlFormRef.current = url;
          fetchUrlForm();
        }}
        placeholder={{
          currentUrl: location.toString(),
          fileName: "wheel.min.js.txt",
        }}
      />
    </>
  );
}

interface EditorTabPanelProps {
  index: number;
  displayIndex: number;
  readOnly?: boolean;
  editorRef: MutableRefObject<MonacoEditor | null>;
  defaultFiles?: string[];
}
interface InputControllerProps {
  name:
    | "original"
    | "clairvoyance"
    | "snap"
    | "reinit"
    | "scripter"
    | "deobfuscated"
    | "patched"
    | "userscript";
  control: Control<MyFormProps>;
}
function EditorTabPanel(props: EditorTabPanelProps & InputControllerProps) {
  const {
    displayIndex: value,
    index,
    readOnly,
    editorRef,
    defaultFiles,
    name,
    control,
    ...other
  } = props;
  const [ref, setRef] = useState<MonacoEditor | null>(null);
  const { isSuccess, data } = useQuery({
    enabled: !!defaultFiles && defaultFiles.length > 0,
    staleTime: Infinity,
    queryKey: ["resource-file", defaultFiles],
    queryFn: async () => {
      if (!!defaultFiles && defaultFiles.length > 0) {
        for (const file of defaultFiles) {
          const response = await axios.get(`./${file}`, {
            responseType: "text",
          });
          if (
            response?.headers["content-type"] !== "text/html" &&
            response.data
          ) {
            return response.data;
          }
        }
        return null;
      }
      return null;
    },
  });
  useEffect(() => {
    if (ref && isSuccess) {
      ref.setValue(data);
    }
  }, [ref, isSuccess, data]);
  return (
    <div hidden={value !== index} {...other} style={{ height: "100%" }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            options={{ readOnly: !!readOnly }}
            defaultLanguage="javascript"
            value={value}
            onChange={onChange}
            onMount={(editor, monaco) => {
              setRef(editor);
              editorRef.current = editor;
              editor.getModel()?.updateOptions({ tabSize: 2 });
              monaco.editor.setTheme("vs-dark");
            }}
          ></Editor>
        )}
      ></Controller>
    </div>
  );
}
interface EditorTabProps {
  label: string;
  icon?: ReactElement;
}
function EditorTab(props: EditorTabProps) {
  return <Tab iconPosition="start" {...props} />;
}
