import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteCompany, getAllcompany } from "../../../Utility/API/company";
import View from "./View";
import { FormattedMessage } from "react-intl";

export default function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(false);
  const [updateData, setUpdate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getCompanies = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllcompany();

    if (res.status === 200) {
      let companies = res.data?.companies.map((ele) => {
        const { address, ...newObj } = ele;
        let obj = { ...address, ...newObj };
        return obj;
      });
      setData(companies);
      setIsLoading(false);
    } else {
      console.log(res);
    }
  }, []);

  useEffect(() => {
    getCompanies();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Company Name",
        Header: () => (
          <FormattedMessage id='Company_Name' defaultMessage={"Company Name"} />
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
        Header: () => <FormattedMessage id='Email' defaultMessage={"Email"} />,
      },
      {
        accessorKey: "country",
        header: "Country",
        Header: () => (
          <FormattedMessage id='Country' defaultMessage={"Country"} />
        ),
      },
      {
        accessorFn: (row) =>
          row?.currency
            ? `${row?.currency?.code} (${row?.currency?.symbol})`
            : "NA",
        header: "Currency",
        Header: () => (
          <FormattedMessage id='Currency' defaultMessage={"Currency"} />
        ),
      },
      {
        accessorKey: "timeZone",
        header: "Timezone",
        Header: () => (
          <FormattedMessage id='Timezone' defaultMessage={"Timezone"} />
        ),
      },
    ],
    [],
  );

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <h4>List All Companies</h4>
              </div>
              <div className='col-md-6 mb-3' style={{ textAlign: "right" }}>
                <button
                  className='btn btn-primary text-right'
                  onClick={() => setIsOpen(true)}
                >
                  Add New
                </button>
              </div>
            </div>

            <p className='card-title-desc' style={{ textAlign: "right" }}>
              <button className='btn btn-info text-right'>CSV</button>
              <button className='btn btn-info text-right'>Excel</button>
              <button className='btn btn-info text-right'>PDF</button>
              <button className='btn btn-info text-right'>Print</button>
            </p>

            <MaterialReactTable
              columns={columns}
              data={data || []}
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
                    color='info'
                    onClick={() => {
                      setViewData(row.original);
                      setIsViewOpen(true);
                    }}
                  >
                    <i className='fas fa-eye'></i>
                  </IconButton>
                  <IconButton
                    color='secondary'
                    onClick={() => {
                      let obj = {
                        ...row.original,
                        currency: row.original.currency._id,
                        companyType: row.original.companyType._id,
                      };
                      setUpdate(obj);
                      setIsOpen(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color='error'
                    onClick={async () => {
                      await deleteCompany(row.original._id);
                      getCompanies();
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
            {isOpen && (
              <AddNew
                getCompanies={getCompanies}
                updateData={updateData}
                setUpdate={setUpdate}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}
            {isViewOpen && (
              <View
                viewData={viewData}
                setViewData={setViewData}
                show={isViewOpen}
                setShow={setIsViewOpen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
