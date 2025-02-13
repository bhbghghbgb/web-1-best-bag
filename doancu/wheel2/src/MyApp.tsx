import { Editor } from "@monaco-editor/react";
import BiotechIcon from "@mui/icons-material/Biotech";
import DescriptionIcon from "@mui/icons-material/Description";
import FoundationIcon from "@mui/icons-material/Foundation";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyIcon from "@mui/icons-material/Key";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import { Box, Button, Divider, Stack, Tab, Tabs } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { editor } from "monaco-editor";
import React, { useEffect, useRef, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { webcrack } from "webcrack";
import { safeEval } from "./sandbox";

type MonacoEditor = editor.IStandaloneCodeEditor;

interface FormProps {
  original: string;
  clairvoyance: string;
  snap: string;
  reinit: string;
  scripter: string;
  deobfuscated: string;
  userscript: string;
}

export default function MyApp() {
  const [tabIndex, setTabIndex] = useState(0);
  const editorOriginalRef = useRef<MonacoEditor | null>(null);
  const editorClairvoyanceRef = useRef<MonacoEditor | null>(null);
  const editorSnapRef = useRef<MonacoEditor | null>(null);
  const editoReinitRef = useRef<MonacoEditor | null>(null);
  const editorScripterRef = useRef<MonacoEditor | null>(null);
  const editorDeobfuscatedRef = useRef<MonacoEditor | null>(null);
  const editorUserscriptef = useRef<MonacoEditor | null>(null);
  const {
    handleSubmit: handleSubmitForm,
    reset: resetForm,
    control: controlForm,
  } = useForm<FormProps>({
    defaultValues: {
      original: "",
      clairvoyance: "",
      snap: "",
      reinit: "",
      scripter: "",
      deobfuscated: "",
      userscript: "",
    },
  });
  const deobfuscateCode = async (code: string) =>
    (
      await webcrack(code, {
        jsx: false,
        unpack: false,
        unminify: false,
        deobfuscate: true,
        mangle: (id) => id.startsWith("_0x"),
        sandbox: safeEval,
      })
    ).code;
  const handleSubmit = () =>
    handleSubmitForm(async (data) => {
      const { original } = data;
      const deobfuscated = await deobfuscateCode(original);
      editorDeobfuscatedRef.current?.setValue(deobfuscated);
      setTabIndex(5);
    })();

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
          <EditorTab label="Deobfuscated" icon={<SanitizerIcon />} />
          <EditorTab label="Userscript" icon={<KeyIcon />} />
        </Tabs>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <EditorTabPanel
            index={0}
            value={tabIndex}
            editorRef={editorOriginalRef}
            defaultFiles={[/*"wheel.deob.txt",*/ "wheel.min.txt"]}
            name="original"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={1}
            value={tabIndex}
            editorRef={editorClairvoyanceRef}
            defaultFiles={["wheel.patch.txt"]}
            name="clairvoyance"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={2}
            value={tabIndex}
            editorRef={editorSnapRef}
            defaultFiles={["wheel.patch2.txt"]}
            name="snap"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={3}
            value={tabIndex}
            editorRef={editoReinitRef}
            defaultFiles={["wheel.patch3.txt"]}
            name="reinit"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={4}
            value={tabIndex}
            editorRef={editorScripterRef}
            defaultFiles={["wheel.userscripter.txt"]}
            name="scripter"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={5}
            value={tabIndex}
            readOnly
            editorRef={editorDeobfuscatedRef}
            name="deobfuscated"
            control={controlForm}
          ></EditorTabPanel>
          <EditorTabPanel
            index={6}
            value={tabIndex}
            readOnly
            editorRef={editorUserscriptef}
            name="userscript"
            control={controlForm}
          ></EditorTabPanel>
        </Box>
        <Stack gap={2} justifyContent={"center"}>
          <Button onClick={handleSubmit} variant={"contained"}>
            Submit
          </Button>
          <Button onClick={() => resetForm()} variant={"outlined"}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

interface EditorTabPanelProps {
  index: number;
  value: number;
  readOnly?: boolean;
  editorRef: React.MutableRefObject<MonacoEditor | null>;
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
    | "userscript";
  control: Control<FormProps>;
}
function EditorTabPanel(props: EditorTabPanelProps & InputControllerProps) {
  const {
    value,
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
    queryKey: ["resource-file", defaultFiles],
    queryFn: async () => {
      if (!!defaultFiles && defaultFiles.length > 0) {
        for (const file of defaultFiles) {
          const response = await axios.get(`./public/${file}`, {
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
            onMount={(editor) => {
              setRef(editor);
              editorRef.current = editor;
            }}
          ></Editor>
        )}
      ></Controller>
    </div>
  );
}
interface EditorTabProps {
  label: string;
  icon?: React.ReactElement;
}
function EditorTab(props: EditorTabProps) {
  return <Tab iconPosition="start" {...props} />;
}
