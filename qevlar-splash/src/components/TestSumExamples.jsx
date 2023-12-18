import imgUrl from '../assets/code.png'

const TestSumExamples = () => {
  return (
    <section className='test-sum-examples'>
      <div id='test-sum-container'>
        <div className="test-sum-example">
          <h3>Rate Limiting</h3>
          <div className='test-sum-code'></div>
          {/* <img src={imgUrl} className='test-sum-code' /> */}
        </div>
        <div className="test-sum-example">
          <h3>Depth Limiting</h3>
          {/* <img src={imgUrl} className='test-sum-code' /> */}
          <div className='test-sum-code'></div>
        </div>
        <div className="test-sum-example">
          <h3>Field Duplication</h3>
          {/* <img src={imgUrl} className='test-sum-code' /> */}
          <div className='test-sum-code'></div>
        </div>
      </div>
    </section>
  )
}

export default TestSumExamples;