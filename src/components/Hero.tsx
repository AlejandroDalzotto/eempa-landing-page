import Cta from "./Cta";

export default function Hero() {
  return (
    <section className="h-[90vh] w-full grid place-content-center bg-[linear-gradient(0deg,#00000060,#00000060),url('/hero_image.webp')] bg-center bg-no-repeat">
      <article className="flex flex-col gap-y-8 items-start md:items-center px-10 md:p-0">
        <h2 style={{ textShadow: "0 0 6px rgba(250 250 250 / 0.7)" }} className="text-3xl text-left md:text-center text-balance text-neutral-50">Comienza tu carrera en <strong>EEMPA</strong></h2>
        <p className="text-left md:text-center text-lg font-medium text-balance text-neutral-300">EEMPA es tu camino hacia un futuro educativo sólido. Ofrecemos una experiencia secundaria adaptada a adultos. ¡Prepárate para el éxito con nosotros!</p>
        <Cta text="Más información" />
      </article>
    </section>
  )
}
