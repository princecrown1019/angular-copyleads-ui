import React from "react";
import styles from "./Tree.module.css";
/**
 * Component to create a tree from a given data source
 *
 * @param {object} props props
 * @param {object} props.treeData data source
 * @param {boolean} props.showChildren Should show the children by default
 * @param {string} props.indentation Indentation for each level
 */
const Tree = ({ treeData, showChildren = true, indentation = "20px" }) => {
  return (
    <div className={styles.tree}>
      <div className={`${styles.children_con} ${showChildren ?  styles.show : styles.hide}`}>
        {treeData.map((node,indx) => (
          <TreeNode node={node} key={indx} indentation={indentation} />
        ))}
      </div>
    </div>
  );
};

/**
 * Component to create a tree from a given data source recursively
 * @param {object} props props
 * @param {object} props.node data source for each root node
 * @param {string} props.indentation indentation level for the each level
 */
const TreeNode = ({ node, indentation }) => {
  const { children, label, link } = node;

  const [showChildren, setShowChildren] = React.useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  if (link) {
    return <EndNode link={link} label={label} />;
  }
  return (
    <>
      <div onClick={handleClick} className={styles.label}>
        <DirectoryIcon showChildren={showChildren} />
        <span>{label}</span>
      </div>
      <div className={styles.child_cont} style={{ paddingLeft: indentation }}>
        <Tree
          treeData={children}
          showChildren={showChildren}
          indentation={indentation}
        />
      </div>
    </>
  );
};

/**
 *
 * @param {object} props props
 * @param {string} props.link Link to the page passed as href for redirection
 * @param {string} props.label Lable to be shown as display text
 */
const EndNode = ({ link, label }) => {
  return (
    <div className={`${styles.endnode} ${styles.label}`}>
      <FileIcon />
      <a href={link}>{label}</a>
    </div>
  );
};

const DirectoryIcon = ({ showChildren }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={16}
    height={16}
    viewBox="-128 0 512 512"
    className={`${styles.directory_icon} ${showChildren ?  styles.shown : styles.hidden}`}
  >
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
  </svg>
);

const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={16}
    height={16}
    className={styles.file_icon}
  >
    <circle cx={8} cy={8} r={4} fill="none" stroke="black" strokeWidth={1.5} />
  </svg>
);

export default Tree;
