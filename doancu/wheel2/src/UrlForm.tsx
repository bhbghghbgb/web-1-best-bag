import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  url: string;
}

interface SubscribeDialogProps {
  open: boolean;
  onClose: () => void;
  onAccept: (data: FormData) => void;
  placeholder: { currentUrl: string; fileName: string };
}

const SubscribeDialog: FC<SubscribeDialogProps> = ({
  open,
  onClose,
  onAccept,
  placeholder,
}) => {
  const { handleSubmit, control, reset, setFocus } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    onAccept(data);
    onClose();
    reset();
  };
  const { currentUrl, fileName } = placeholder;
  const defaultValue = useMemo(
    () => `${extractUrlDirectory(currentUrl)}/${fileName}`,
    [currentUrl, fileName]
  );
  useEffect(() => {
    setFocus("url", { shouldSelect: true });
  }, [setFocus]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: handleSubmit(onSubmit),
        },
      }}
    >
      <DialogTitle>Read Original text from URL</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Try to download text from an URL directly. Requires
          Access-Control-Allow-Origin: *
        </DialogContentText>
        <Controller
          name="url"
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <TextField
              {...field}
              inputRef={field.ref}
              autoFocus
              required
              placeholder={defaultValue}
              margin="dense"
              label="URL"
              type="url"
              fullWidth
              variant="standard"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button type="submit" variant="contained">
          Get
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// https://stackoverflow.com/a/77695630/12495504
function extractUrlDirectory(url: string) {
  // Is this a file-like path, e.g. http.../foo.bar?
  const regex = /^(.*)\/([^.]+(\.([^/?#]+))+)(\?[^#]*)?(#.*)?$/;
  const match = url.match(regex);
  // Only if it is, do we cut that part off:
  if (match !== null) {
    const { [1]: dirname, [2]: file, [4]: ext } = match;
    console.debug(
      `[UrlForm] URL "${url}" is for a file "${file}", with extension "${ext}", extracted dirname "${dirname}"`
    );
    url = dirname;
  } else {
    console.debug(`[UrlForm] URL "${url}" is for a directory`);
  }
  return url.replace(/\/+$/, "");
}

const UrlForm = SubscribeDialog;
export default UrlForm;
