    import { StudentTable } from "./components/StudentTable";
    import { students } from "./data/students";

    function Page(){
      return (
      <div className="container mx-auto pt-5 pb-5">
        <h1 className="text-5xl mb-5" >Lista de Estudantes</h1>
        <StudentTable 
          students = {students}
        />
      </div>
      );
    }

    export default Page;