interface postProp {
  children: string | JSX.Element
  title: string
}

export function BlogPost(props: postProp) {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.children }
    </div>
  )
}