import { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddLanguage from "../Modals/AddLanguage";
import { deleteConstant } from "../../../../../../Utility/API/constant";
import { FormattedMessage } from "react-intl";

export default function LanguageTable({ data, getAll, setIsError }) {
  const [isAddLanOpen, setAddLanIsOpen] = useState(false);

  let Data =
    data?.map((ele) => ({
      id: ele._id,
      name: ele.name,
    })) || [];

  async function handleDelete(doc, id) {
    let res = await deleteConstant(doc, id);
    if (res.status === 204) {
      getAll();
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Language",
        Header: () => (
          <FormattedMessage id='Language' defaultMessage={"Language"} />
        ),
      },
    ],
    [],
  );
  return (
    <div class='tab-pane'>
      <h4>List All Language</h4>
      <p class='card-title-desc' style={{ textAlign: "right" }}>
        <button
          class='btn btn-primary text-right'
          onClick={() => setAddLanIsOpen(true)}
        >
          Add New Language
        </button>
      </p>
      <MaterialReactTable
        columns={columns}
        data={Data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableTopToolbar={false}
        enableRowActions
        positionActionsColumn='last'
        enableRowNumbers
        rowNumberMode='static'
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            <IconButton
              color='secondary'
              onClick={() => {
                table.setEditingRow(row);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color='error'
              onClick={() => {
                handleDelete("language", row.original.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
        muiTableProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
      />
      {isAddLanOpen ? (
        <AddLanguage
          getAll={getAll}
          show={isAddLanOpen}
          setShow={setAddLanIsOpen}
        />
      ) : null}
    </div>
  );
}
