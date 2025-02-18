import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid2, IconButton, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { MyFormProps } from "./MyApp";

interface NameListControlProps {
  control: Control<MyFormProps>;
}
const NameList: FC<NameListControlProps> = ({ control }) => {
  const { fields, prepend, insert, remove } = useFieldArray<MyFormProps>({
    control,
    name: "nameList",
  });

  return (
    <Stack alignItems="stretch" gap={6} sx={{ width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => prepend({ value: "" })}
      >
        Add Name
      </Button>
      <Grid2 container spacing={2} style={{ width: "100%" }}>
        {fields.map((field, index) => (
          <Stack key={field.id} direction={"row"} alignItems={"center"}>
            <Controller
              name={`nameList.${index}.value` as const}
              control={control}
              defaultValue={field.value}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={`Name ${index + 1}`}
                  variant="filled"
                  fullWidth
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      insert(index + 1, { value: "" });
                    }
                  }}
                />
              )}
            />
            <IconButton onClick={() => remove(index)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
      </Grid2>
    </Stack>
  );
};

export default NameList;
