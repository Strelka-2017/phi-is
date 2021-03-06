import React, { Component } from 'react'

// This is pretty an SVG file dumped into a React component, with a few adjustments:
// React components can't contain hyphenated properties e.g: 'stroke-width' must be 'strokeWidth'.
// If you feed this component a 'title', and 'subtitle', it will render into the diagram.

class IconRead extends Component {
   render() {
      const { title, subtitle } = this.props
      return (
         <div className="svg-icon svg-read">
         <svg viewBox="0 0 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg">
             <defs>
                 <filter x="-8.0%" y="-8.0%" width="115.9%" height="115.9%" filterUnits="objectBoundingBox" id="filter-1">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <filter x="-8.0%" y="-8.0%" width="115.9%" height="115.9%" filterUnits="objectBoundingBox" id="filter-2">
                     <feGaussianBlur stdDeviation="3" in="SourceGraphic"></feGaussianBlur>
                 </filter>
                 <text id="text-read-1" fontFamily="ArialMT, Arial" fontSize="18" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="62.1503906" y="218">{subtitle}</tspan>
                 </text>
                 <filter x="-6.5%" y="-25.0%" width="113.1%" height="170.0%" filterUnits="objectBoundingBox" id="filter-4">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
                 <text id="text-read-2" fontFamily="ArialMT, Arial" fontSize="28" fontWeight="normal" fill="#FFFFFF">
                     <tspan x="1" y="113">{title}</tspan>
                 </text>
                 <filter x="-9.0%" y="-16.1%" width="117.9%" height="145.2%" filterUnits="objectBoundingBox" id="filter-6">
                     <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                     <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                     <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                 </filter>
             </defs>
             <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                 <g id="read">
                     <polygon className="bottom_shape read_bottom_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-1)" points="132.15893 23.03001 211.99052 102.8616 132.15893 182.69319 52.32734 102.8616"></polygon>
                     <polygon className="bottom_shape read_bottom_shape" fill="#E4F5FD" fillRule="nonzero" points="131.15893 21.03001 210.99052 100.8616 131.15893 180.69319 51.32734 100.8616"></polygon>
                     <polygon className="top_shape read_top_shape_shadow" fillOpacity="0.5" fill="#000000" fillRule="nonzero" filter="url(#filter-2)" points="100.8676 23.00998 180.69919 102.84157 100.8676 182.67316 21.03601 102.84157"></polygon>
                     <polygon className="top_shape read_top_shape" fill="#D0D5EC" fillRule="nonzero" points="98.8676 21.00998 178.69919 100.84157 98.8676 180.67316 19.03601 100.84157"></polygon>
                     <g id="read_subtitle" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-4)" xlinkHref="#text-read-1"></use>
                         <use xlinkHref="#text-read-1"></use>
                     </g>
                     <g id="read_title" fillOpacity="1" fill="#FFFFFF">
                         <use filter="url(#filter-6)" xlinkHref="#text-read-2"></use>
                         <use xlinkHref="#text-read-2"></use>
                     </g>
                 </g>
             </g>
         </svg>
         </div>
      );
   }
}

export default IconRead;
