import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

interface FormData {
  url: string;
}

interface SubscribeDialogProps {
  open: boolean;
  onClose: () => void;
  onAccept: (data: FormData) => void;
  placeholder: string;
}

const SubscribeDialog: React.FC<SubscribeDialogProps> = ({
  open,
  onClose,
  onAccept,
  placeholder,
}) => {
  const { handleSubmit, control, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onAccept(data);
    onClose();
    reset();
  };

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
          defaultValue={placeholder}
          render={({ field }) => (
            <TextField
              {...field}
              autoFocus
              required
              placeholder={placeholder}
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

const UrlForm = SubscribeDialog;
export default UrlForm;
