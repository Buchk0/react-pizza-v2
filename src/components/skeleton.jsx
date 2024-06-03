import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={290}
    height={465}
    viewBox="0 0 290 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="119" r="116" />
    <rect x="0" y="307" rx="10" ry="10" width="280" height="88" />
    <rect x="132" y="409" rx="20" ry="20" width="150" height="45" />
    <rect x="0" y="264" rx="0" ry="0" width="280" height="27" />
    <rect x="228" y="306" rx="0" ry="0" width="0" height="1" />
    <rect x="7" y="420" rx="10" ry="10" width="91" height="27" />
  </ContentLoader>
);

export default Skeleton;
