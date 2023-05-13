import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EquipmentTable from "../Components/EquipmentTable";

const fetchEquipments = () => {
  return fetch("/api/equipments").then((res) => res.json());
};

export default function EquipmentList() {
    const [loading, setLoading] = useState(true);
    const [equipments, setEquipments] = useState(null);

    useEffect(() => {
      fetchEquipments()
        .then(equipments => {
          console.log(equipments);
          setLoading(false);
          setEquipments(equipments);
        });
    }, []);

    return <>
      {equipments && <EquipmentTable equipment={equipments}></EquipmentTable>}
    </>
};