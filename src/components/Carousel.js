import React, { useState, useLayoutEffect } from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";

export default function Carousel(props) {
  const [count, setCount] = useState(0);
  const isAuto = props.options.isAuto;
  const time = props.options.time;
  const columns = props.options.columns;
  const fields = props.fields;
  const fieldsLength = fields.length;

  useLayoutEffect(() => {
    if (isAuto) {
      setTimeout(() => {
        if (count + columns > fieldsLength) {
          setCount(0);
        } else {
          setCount((count + columns) % fieldsLength);
        }
      }, time);
    }
  }, [columns, count, fieldsLength, isAuto, time]);

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleNext = () => {
    if (count < fieldsLength - columns) {
      setCount(count + 1);
    }
  };
  const fieldsToRender = fields
    .slice(count, columns + count)
    .map((ele, index) => {
      return (
        <div className="tech column" key={index}>
          <LazyLoad placeholder={<Placeholder />} once>
            <img src={ele.src} alt={ele.name} />
          </LazyLoad>
          <p>{ele.name}</p>
        </div>
      );
    });
  return fieldsLength > columns && !isAuto ? (
    <div className="columns is-flex-mobile">
      <button className="clickers" onClick={handlePrev}>
        <i className="fas fa-chevron-circle-left" />
      </button>
      {fieldsToRender}
      <button className="clickers" onClick={handleNext}>
        <i className="fas fa-chevron-circle-right" />
      </button>
    </div>
  ) : (
    <div className="columns is-flex-mobile">{fieldsToRender}</div>
  );
}
