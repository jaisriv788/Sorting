import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function App({ Data }) {
  return (
    <div>
      <ResponsiveContainer width="50%" height={250}>
        <BarChart width={Data.length * 100} height={250} data={Data}>
          <XAxis dataKey="Data" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Data" fill="#c2fbd7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
