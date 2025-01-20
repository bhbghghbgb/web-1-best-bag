import { Editor, type OnMount } from "@monaco-editor/react";
import BiotechIcon from "@mui/icons-material/Biotech";
import DescriptionIcon from "@mui/icons-material/Description";
import FoundationIcon from "@mui/icons-material/Foundation";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import KeyIcon from "@mui/icons-material/Key";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import { Box, Divider, Stack, Tab, Tabs } from "@mui/material";
import React, { useRef, useState } from "react";

type IStandaloneCodeEditor = Parameters<OnMount>[0];

export default function MyApp() {
  const [tabIndex, setTabIndex] = useState(0);
  const editorOriginalRef = useRef<IStandaloneCodeEditor | null>(null);
  const editorClairvoyanceRef = useRef<IStandaloneCodeEditor | null>(null);
  const editorSnapRef = useRef<IStandaloneCodeEditor | null>(null);
  const editoReinitRef = useRef<IStandaloneCodeEditor | null>(null);
  const editorScripterRef = useRef<IStandaloneCodeEditor | null>(null);
  const editorDeobfuscatedRef = useRef<IStandaloneCodeEditor | null>(null);
  const editorUserscriptef = useRef<IStandaloneCodeEditor | null>(null);
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
          ></EditorTabPanel>
          <EditorTabPanel
            index={1}
            value={tabIndex}
            editorRef={editorClairvoyanceRef}
          ></EditorTabPanel>
          <EditorTabPanel
            index={2}
            value={tabIndex}
            editorRef={editorSnapRef}
          ></EditorTabPanel>
          <EditorTabPanel
            index={3}
            value={tabIndex}
            editorRef={editoReinitRef}
          ></EditorTabPanel>
          <EditorTabPanel
            index={4}
            value={tabIndex}
            editorRef={editorScripterRef}
          ></EditorTabPanel>
          <EditorTabPanel
            index={5}
            value={tabIndex}
            readOnly
            editorRef={editorDeobfuscatedRef}
          ></EditorTabPanel>
          <EditorTabPanel
            index={6}
            value={tabIndex}
            readOnly
            editorRef={editorUserscriptef}
          ></EditorTabPanel>
        </Box>
      </Stack>
    </>
  );
}

interface EditorTabPanelProps {
  index: number;
  value: number;
  readOnly?: boolean;
  editorRef: React.MutableRefObject<IStandaloneCodeEditor>;
}
function EditorTabPanel(props: EditorTabPanelProps) {
  const { value, index, readOnly, editorRef, ...other } = props;

  return (
    <div hidden={value !== index} {...other} style={{ height: "100%" }}>
      <Editor
        options={{ readOnly }}
        onMount={(editor) => (editorRef.current = editor)}
      ></Editor>
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
