import { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddSkill from "../Modals/AddSkill";
import { deleteConstant } from "../../../../../../Utility/API/constant";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../../../../../Context/AuthContext";

export default function SkillTable({ data, getAll, setIsError }) {
  const { permissions } = useAuth();
  const [isAddSkillOpen, setAddSkillIsOpen] = useState(false);

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
        header: "Skill",
        Header: () => <FormattedMessage id='Skill' defaultMessage={"Skill"} />,
      },
    ],
    [],
  );
  return (
    <div class='tab-pane'>
      <h4>List All Skill</h4>
      {(permissions.includes("All") || permissions.includes("add85")) && (
        <p class='card-title-desc' style={{ textAlign: "right" }}>
          <button
            class='btn btn-primary text-right'
            onClick={() => setAddSkillIsOpen(true)}
          >
            Add New Skill
          </button>
        </p>
      )}
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
            {(permissions.includes("All") ||
              permissions.includes("update85")) && (
              <IconButton
                color='secondary'
                onClick={() => {
                  table.setEditingRow(row);
                }}
              >
                <EditIcon />
              </IconButton>
            )}
            {(permissions.includes("All") ||
              permissions.includes("delete85")) && (
              <IconButton
                color='error'
                onClick={() => {
                  handleDelete("skill", row.original.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
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
      {isAddSkillOpen ? (
        <AddSkill
          getAll={getAll}
          show={isAddSkillOpen}
          setShow={setAddSkillIsOpen}
        />
      ) : null}
    </div>
  );
}
