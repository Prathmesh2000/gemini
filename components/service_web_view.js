import React from "react";
import styles from "../assets/css/services.module.css";

const AnimationBox = ({ data }) => {
  return (
    <div className={styles.outerdiv}>
      <div className={styles.title}>{data.name}</div>
      <div className={styles.text}>{data.description}</div>
      <a href={data.slug} className={styles.middlediv}>
        <div className={styles.inner}></div>
      </a>
    </div>
  );
};

const NodeText = ({ data }) => {
  return (
    <div className={styles.centerText} style={data.styles || {}}>
      {data.text}
    </div>
  );
};
const NodeChild = ({ data }) => {
  return <AnimationBox data={data.node} />;
};
const NodeParent = ({ data }) => {
  return (
    <div
      className={data.className || styles.horizontalBox}
      style={data.styles || {}}
    >
      {(data.childs || []).map((child) => {
        if (child.type == "child") return <NodeChild data={child} />;
        if (child.type == "text") return <NodeText data={child} />;
      })}
    </div>
  );
};
const Flow = ({ data }) => {
  return (
    <div className={styles.box} style={data.styles || {}}>
      {(data.childs || []).map((node) => {
        if (node.type == "child") return <NodeChild data={node} />;
        if (node.type == "parent") return <NodeParent data={node} />;
        if (node.type == "text") return <NodeText data={node} />;
      })}
    </div>
  );
};
const childEle = ([node]) => {
  return {
    type: "child",
    node,
  };
};
const childText = (styles = {}) => ({
  type: "text",
  text: "Solutions (CoE)",
  styles: styles,
});
const parentEle = (data, a = {}, props = {}) => {
  const { styles, center } = props;
  let childs = a.numberOfChilds == 1 ? childs = [childEle([data[0]])] : [childEle([data[0]]), childEle([data[1]])]
  return {
    type: "parent",
    className: props.className,
    styles: styles || {},
    childs,
  };
};

const SixElements = (nodes) => {
  return [
    childText(),
    parentEle(nodes.slice(0, 1), { numberOfChilds: 1 }, { styles: { top: "calc((100%/4 * 0) + 8% )" } }),
    parentEle(nodes.slice(1, 3), { numberOfChilds: 2 }, { styles: { top: "calc((100%/4 * 1) + 10% )", width: "150%" } }),
    parentEle(nodes.slice(3, 5), { numberOfChilds: 2 }, { styles: { top: "calc((100%/4 * 2) + 10% )", width: "150%" } }),
    parentEle(nodes.slice(5, 7), { numberOfChilds: 1 }, { styles: { top: "calc((100%/4 * 3) + 12% )" } }),
  ];
};
const SevenElements = (nodes) => {
  return [
    childText(),
    parentEle(nodes.slice(0, 1), { numberOfChilds: 1 }, { styles: { top: "calc((100%/4 * 0) + 8% )" } }),
    parentEle(nodes.slice(1, 3), { numberOfChilds: 2 }, { styles: { top: "calc((100%/4 * 1) + 10% )", width: "150%" } }),
    parentEle(nodes.slice(3, 5), { numberOfChilds: 2 }, { styles: { top: "calc((100%/4 * 2) + 10% )", width: "150%" } }),
    parentEle(nodes.slice(5, 7), { numberOfChilds: 2 }, { styles: { top: "calc((100%/4 * 3) + 12% )", width: "70%" } }),
  ];
};
const EightElements = (nodes) => {
  return [
    childText(),
    parentEle(nodes.slice(0, 1), { numberOfChilds: 1 }, { styles: { top: "calc((100%/5 * 0) + 8% )" } }),
    parentEle(nodes.slice(1, 3), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 1) + 8% )", width: "130%" } }),
    parentEle(nodes.slice(3, 5), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 2) + 8% )", width: "160%" } }),
    parentEle(nodes.slice(5, 7), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 3) + 8% )", width: "130%" } }),
    parentEle(nodes.slice(7, 8), { numberOfChilds: 1 }, { styles: { top: "calc((100%/5 * 4) + 5% )" } }),
  ];
};
const NineElements = (nodes) => {
  return [
    childText(),
    parentEle(nodes.slice(0, 1), { numberOfChilds: 1 }, { styles: { top: "calc((100%/5 * 0) + 8% )" } }),
    parentEle(nodes.slice(1, 3), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 1) + 8% )", width: "130%" } }),
    parentEle(nodes.slice(3, 5), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 2) + 8% )", width: "160%" } }),
    parentEle(nodes.slice(5, 7), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 3) + 8% )", width: "130%" } }),
    parentEle(nodes.slice(7, 9), { numberOfChilds: 2 }, { styles: { top: "calc((100%/5 * 4) + 5%)", width: "70%" } }),
  ];
};
const Tenelements = (nodes) => {
  return [
    childText(),
    parentEle(nodes.slice(0, 1), { numberOfChilds: 1 }, { styles: { top: "calc((100%/6 * 0) + 8% )" } }),
    parentEle(nodes.slice(1, 3), { numberOfChilds: 2 }, { styles: { top: "calc((100%/6 * 1) + 5% )", width: "120%" } }),
    parentEle(nodes.slice(3, 5), { numberOfChilds: 2 }, { styles: { top: "calc((100%/6 * 2) + 5% )", width: "160%" } }),
    parentEle(nodes.slice(5, 7), { numberOfChilds: 2 }, { styles: { top: "calc((100%/6 * 3) + 5% )", width: "160%" } }),
    parentEle(nodes.slice(7, 9), { numberOfChilds: 2 }, { styles: { top: "calc((100%/6 * 4) + 5% )", width: "120%" } }),
    parentEle(nodes.slice(9, 10), { numberOfChilds: 1 }, { styles: { top: "calc((100%/6 * 5 + 2%) )" } }),
  ];
};
const getChilds = (nodes) => {
  return (
    {
      6: SixElements(nodes),
      7: SevenElements(nodes),
      8: EightElements(nodes),
      9: NineElements(nodes),
      10: Tenelements(nodes),
    }[nodes.length] || []
  );
};

const animationComponents = (nodes) => {
  let childs = getChilds(JSON.parse(JSON.stringify(nodes)));
  return <Flow data={{ styles: { marginTop: "0%" }, childs }} />;
};
const service = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titleText}>{data.heading1}</div>
      <div className={styles.titleDescription}>{data.heading2}</div>
      <div className={styles.background}>{animationComponents(data.nodes)}
      </div>
    </div>
  );
};

export default service;
