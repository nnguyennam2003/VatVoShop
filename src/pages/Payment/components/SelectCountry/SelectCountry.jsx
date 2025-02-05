import React, { useEffect, useState } from "react"
import "./SelectCountry.css"
import {
  getAllCity,
  getAllDistrict,
  getAllWard,
} from "../../../../services/province"

function SelectCountry(props) {
  const [citys, setCitys] = useState([])
  const [selectedCity, setSelectedCity] = useState("")
  const [districts, setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [wards, setWards] = useState([])

  useEffect(() => {
    const getCityData = async () => {
      try {
        const res = await getAllCity()
        setCitys(res.data.results)
      } catch (err) {
        console.error(err)
      }
    };

    getCityData();
  }, []);

  useEffect(() => {
    const getDistrictData = async () => {
      try {
        const res = await getAllDistrict(selectedCity)
        setDistricts(res.data.results)
        setSelectedDistrict("")
        setWards([])
      } catch (err) {
        console.error(err)
      }
    };

    if (selectedCity) {
      getDistrictData()
    } else {
      setDistricts([])
      setWards([])
    }
  }, [selectedCity])

  useEffect(() => {
    const getWardData = async () => {
      try {
        const res = await getAllWard(selectedDistrict)
        setWards(res.data.results)
      } catch (err) {
        console.error(err)
      }
    };

    if (selectedDistrict) {
      getWardData()
    } else {
      setWards([])
    }
  }, [selectedDistrict])

  const handleChangeCity = (e) => {
    setSelectedCity(e.target.value)
  };

  const handleChangeDistrict = (e) => {
    console.log(e.target.value)
    setSelectedDistrict(e.target.value)
  };

  return (
    <div className="select-country">
      <select name="" id="city" onChange={handleChangeCity}>
        <option value="">Chọn thành phố</option>
        {citys.map((city) => (
          <option value={`${city.province_id}`} key={city.province_id}>
            {city.province_name}
          </option>
        ))}
      </select>

      <select name="" id="district" onChange={handleChangeDistrict}>
        <option value="">Chọn quận</option>
        {districts.map((district) => (
          <option value={`${district.district_id}`} key={district.district_id}>
            {district.district_name}
          </option>
        ))}
      </select>

      <select name="" id="ward">
        <option value="">Chọn phường</option>
        {wards.map((ward) => (
          <option value={`${ward.ward_id}`} key={ward.ward_id}>
            {ward.ward_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCountry
