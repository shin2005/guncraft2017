import React from 'react';

export default function Iframe({code}) {
  return (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}`} frameborder="0" allowfullscreen>
    </iframe>
  )
}
