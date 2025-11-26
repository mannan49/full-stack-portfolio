const CTA = () => {
  const cv_uri = import.meta.env.VITE_PORTFOLIO_PDF_URL
  return (
    <div className="cta">
        <a href={cv_uri} download target="_blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA;