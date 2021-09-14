const Button = ({ text }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={event => event.target.innerText = 'You clicked me!'}
    >
      {text}
    </button>
  )
}

export default Button
