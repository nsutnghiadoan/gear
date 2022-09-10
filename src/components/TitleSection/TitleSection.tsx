import React from 'react';

interface TitleSectionProps {
    title : string,
    subTitle : string,
    size : string,
    hasDesp : boolean,
    titleDesp : string,
    sizeDesp : string,
}

function TitleSection({title, subTitle, size, hasDesp, titleDesp, sizeDesp} : TitleSectionProps) {
  return (
    <div className={`tlt_section ${size=="lg" ? "lg" : "sm"}`}>
        <h2>{title} { subTitle ? <span>{subTitle}</span> : ''}</h2>
        {hasDesp ? <h3 className={sizeDesp}>{titleDesp}</h3> : ''}
    </div>
  )
}

export default TitleSection