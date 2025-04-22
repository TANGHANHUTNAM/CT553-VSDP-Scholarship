import { FilterFilled, SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { ConfigProvider, Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useMemo, useState } from "react";
import { GLOBAL_COLOR } from "../../constant/colorCustomize";
import { IFormResponseScholarship } from "../../interface/form-response";
import { getAllFormResponseScholarshipService } from "../../services/form-response";
import { BiSort } from "react-icons/bi";

const ScholarshipApplicationsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchText, setSearchText] = useState("");

  const { data: dataFormResponse, isLoading } = useQuery({
    queryKey: ["form-response-scholarship"],
    queryFn: async () => {
      return (await getAllFormResponseScholarshipService()).data;
    },
  });

  const university = dataFormResponse?.form_response
    .map((item: IFormResponseScholarship) => item.university)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  const filteredData = useMemo(() => {
    return dataFormResponse?.form_response.filter(
      (item: IFormResponseScholarship) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(searchText.toLowerCase());
        return matchesSearch;
      },
    );
  }, [searchText, dataFormResponse]);

  const columns: ColumnsType<IFormResponseScholarship> = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      key: "phone_number",
      responsive: ["sm", "md", "lg"],
    },
    {
      title: "Trường đại học",
      dataIndex: "university",
      key: "university",
      filterIcon: () => <FilterFilled className="text-white" />,
      filtered: true,
      filterMultiple: false,
      filters: university?.map((uni) => ({ text: uni, value: uni })),
      onFilter: (value, record) => {
        return record.university.includes(value as string);
      },
      responsive: ["md", "lg"],
    },
    {
      title: "Ngày nộp",
      dataIndex: "created_at",
      key: "created_at",
      responsive: ["md", "lg"],
      sortIcon: () => <BiSort className="text-white" />,
      sorter: (a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      },
      render: (value) => {
        return new Date(value).toLocaleDateString("vi-VN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 text-2xl font-bold uppercase text-primary">
        Danh sách ứng viên: {dataFormResponse?.form_name}
      </div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Tìm kiếm theo tên hoặc email"
          prefix={<SearchOutlined className="text-gray-500" />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 sm:w-80"
        />
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <ConfigProvider
          theme={{
            token: {},
            components: {
              Table: {
                headerBg: GLOBAL_COLOR,
                headerColor: "#fff",
                headerSortActiveBg: GLOBAL_COLOR,
                headerSortHoverBg: GLOBAL_COLOR,
              },
            },
          }}
        >
          <Table
            loading={isLoading}
            columns={columns}
            dataSource={filteredData}
            pagination={{
              onShowSizeChange(current, size) {
                setPageSize(size);
                setCurrentPage(current);
              },
              onChange(current, size) {
                setCurrentPage(current);
                setPageSize(size);
              },
              showTotal: (total) => `Tổng ${total} ứng viên`,
              current: currentPage,
              pageSize: pageSize,
              showSizeChanger: true,
              responsive: true,
              total: filteredData?.length,
              className: "px-4 py-2",
            }}
            className="w-full"
            scroll={{ x: "max-content" }}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ScholarshipApplicationsTable;
