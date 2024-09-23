const CompanyInfo = (props: any) => {
  return (
    <div>
      <h2>Company Info!!....</h2>
      <p>
        Company Name:
        <span>{props.companyName}</span>
      </p>

      <p>
        Founder Year:
        <span>{props.foundedYear}</span>
      </p>

      <p>
        Employees Count:
        <span>{props.employeesCount}</span>
      </p>
    </div>
  );
};

export default CompanyInfo;
