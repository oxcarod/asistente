import './App.css'

const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png'
// Using placeholder - actual logo will be loaded from local file path in production

function SlideA() {
  return (
    <div className="slide option-a">
      {/* Blurred logo background */}
      <div className="logo-bg">
        <img
          src="file:///C:/Users/oxcar/Documents/projects/asistente/business/Varkos/image.jpg"
          alt=""
          className="logo-blur"
        />
      </div>

      <div className="slide-content">
        <div className="harvard-date">Abril 2026</div>

        <div className="prospect-name">
          Dr. Roberto Mendoza
        </div>

        <div className="main-headline">
          Análisis Estratégico<br />de Potencial de Crecimiento
        </div>

        <div className="varkos-footer">
          <span className="varkos-wordmark">VARKOS</span>
          <span className="varkos-divider">|</span>
          <span className="varkos-sub">Strategic Advice</span>
        </div>

        <div className="author-line">
          Oscar Vázquez<br />
          <span className="author-title">Certified Business Advisor</span>
        </div>
      </div>
    </div>
  )
}

function SlideB() {
  return (
    <div className="slide option-b">
      {/* Blurred logo top-left corner */}
      <div className="logo-corner">
        <img
          src="file:///C:/Users/oxcar/Documents/projects/asistente/business/Varkos/image.jpg"
          alt=""
          className="logo-blur-corner"
        />
      </div>

      <div className="slide-content-b">
        <div className="top-bar">
          <div className="harvard-date-b">Abril 2026</div>
          <div className="prospect-badge">Para: Dr. Roberto Mendoza</div>
        </div>

        <div className="center-mass">
          <div className="varkos-name-only">VARKOS</div>
          <div className="strategic-line">Strategic Advice</div>
          <div className="separator-line"></div>
          <div className="report-title">Análisis de Potencial<br />de Crecimiento</div>
        </div>

        <div className="bottom-bar">
          <div className="author-b">
            <span className="author-name">Oscar Vázquez</span>
            <span className="author-title-b">Certified Business Advisor</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideC() {
  return (
    <div className="slide option-c">
      {/* Full bleed blurred logo */}
      <div className="logo-full">
        <img
          src="file:///C:/Users/oxcar/Documents/projects/asistente/business/Varkos/image.jpg"
          alt=""
          className="logo-blur-full"
        />
      </div>

      <div className="slide-content-c">
        <div className="top-strip">
          <div className="harvard-date-c">Abril 2026</div>
        </div>

        <div className="middle-zone">
          <div className="prospect-c">
            Dr. Roberto Mendoza
          </div>
          <div className="main-title-c">
            Propuesta Estratégica
          </div>
          <div className="subtitle-c">
            Plan de crecimiento y expansión de servicios
          </div>
        </div>

        <div className="bottom-strip">
          <div className="varkos-c">
            <span>VARKOS</span>
            <span className="dot-sep">·</span>
            <span>Strategic Advice</span>
          </div>
          <div className="author-c">
            Oscar Vázquez · Certified Business Advisor
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="mockup-container">
      <div className="mockup-header">
        <h1>Portada PPTX — 3 opciones</h1>
        <p>Estilo Harvard: tipografía serif, espacio en blanco generoso, logo Varkos difuminado al fondo.</p>
        <p className="mockup-note">El logo Varkos (bronce sobre mármol oscuro, estilo griego neoclásico) se muestra difuminado en el fondo de cada opción.</p>
      </div>

      <div className="slides-grid">
        <div className="slide-card">
          <SlideA />
          <div className="slide-label">
            <strong>Opción A — Clásica Harvard</strong>
            <p>Logo centrado y difuminado. Nombre del prospecto prominente. Tipografía serif. Máximo minimalismo.</p>
          </div>
        </div>

        <div className="slide-card">
          <SlideB />
          <div className="slide-label">
            <strong>Opción B — Badge ejecutiva</strong>
            <p>Logo en esquina superior. "Para: Dr. Nombre" como badge. Título del reporte centrado. Más información visible.</p>
          </div>
        </div>

        <div className="slide-card">
          <SlideC />
          <div className="slide-label">
            <strong>Opción C — Full bleed</strong>
            <p>Logo ocupando todo el fondo (difuminado). Texto superpuesto con sombra. Impacto visual más fuerte.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
