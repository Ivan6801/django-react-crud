import { useEffect } from "react";

export function TasksList() {
  useEffect(() => {
    console.log("Pagina carganda");
  }, []);
  
  return (
    <div>
      <p>TasksList</p>
    </div>
  );
}
