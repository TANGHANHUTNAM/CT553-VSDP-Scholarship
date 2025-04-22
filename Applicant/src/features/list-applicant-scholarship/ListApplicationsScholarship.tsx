import ScholarshipApplicationsTable from "./ScholarshipApplicationsTable";

const ListApplicationsScholarship: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-primary/15 px-4 py-4 sm:px-0">
      <ScholarshipApplicationsTable />
    </div>
  );
};

export default ListApplicationsScholarship;
