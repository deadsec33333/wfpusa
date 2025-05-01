import * as React from 'react';

interface Props {
  href: string;
  mainText: string;
  children: React.ReactElement;
}

export const MainPageGraphic = (props: Props): React.ReactElement => {
  return (
    <div className="h-[60vh] relative">
      <img src={props.href} className="w-full object-cover object-center inset-0 h-[60vh]"
           style={{objectPosition: "50%,50%"}}/>
      <div className="absolute inset-0" style={{
        background: "rgba(0, 0, 0, 0.4)",
      }}/>
      <div className="absolute text-center items-center" style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        {props.children}
      </div>
    </div>
  )
}
