import React from "react";

export const Main = () => {
  const [state, setState] = React.useState<{ firstName: string }>({
     firstName: '',
 });

 const fetchData = async () => {
     const response = await fetch(
         'https://api.fake-rest.refine.dev/users/1'
     );
     const result = await response.json();
     return result;
 };

 React.useEffect(() => {
     (async () => {
         const data = await fetchData();
         setState(data);
     })();
 }, []);

  return <div>{state.firstName}</div>;
};
