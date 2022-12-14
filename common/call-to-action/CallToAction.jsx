import path from 'path'
// import fs from 'fs/promises'
const CallToAction = ({ content }) => {
  return (
    <>
      <section
        className="call-action overlay"
        style={{
          backgroundImage: "url('/images/cta-bg.jpg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="call-inner">
                <h2>{content.title}</h2>
                <p>{content.discription}</p>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="button">
                <a href="portfolio.html" className="bizwheel-btn">
                  {content.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
//   const jsonData = await fs.readFile(filePath)
//   const data = JSON.parse(jsonData)
//   return {
//     props: {
//       content: data.CallToAction,
//     },
//   }
// }

export default CallToAction
