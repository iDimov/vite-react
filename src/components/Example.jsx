import './Example.css'

function Example() {
  return (
    <div className="example">
      <h2>Example Component</h2>
      <p>This is an example of how to create components in this template.</p>
      <div className="example-features">
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <span>Fast Development</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🎨</span>
          <span>Clean Styling</span>
        </div>
        <div className="feature">
          <span className="feature-icon">🚀</span>
          <span>Ready to Deploy</span>
        </div>
      </div>
    </div>
  )
}

export default Example
