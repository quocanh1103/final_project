import "./sort.css";
function SortProduct(props) {
  const { handlerChangeSort } = props;

  const onChangeValue = (e) => {
    const keyword = e.target.value;

    if (!handlerChangeSort) {
      return;
    }

    handlerChangeSort(keyword);
  };

  return (
    <select className="selectpicker ml-auto" onChange={onChangeValue}>
      <option value="default">
        <span>MẶC ĐỊNH </span>
      </option>
      <option value="DownToUp">
        <span>GIÁ: THẤP TỚI CAO</span>
      </option>
      <option value="UpToDown">
        <span>GIÁ: CAO TỚI THẤP</span>
      </option>
      <option value="NameUpToDown">
        <span>TÊN: A - Z</span>
      </option>
      <option value="NameDownToUp">
        <span>TÊN: Z - A</span>
      </option>
    </select>
  );
}

export default SortProduct;
