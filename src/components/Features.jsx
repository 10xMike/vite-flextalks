const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#E5E5E5]">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white border-[1px] border-black">
            <i className="mb-4 text-4xl text-blue-500 fas fa-chalkboard-teacher"></i>
            <h4 className="mb-2 text-lg font-semibold underline hover:decoration-4 decoration-2 decoration-pink-500">
              {/* Experienced Instructors */} Lezioni interattive
            </h4>
            <p className="text-gray-600 italic">
              {/* Learn from qualified and experienced instructors with a proven
              track record in teaching English. */}{" "}
              Accedi a lezioni coinvolgenti e interattive che ti permetteranno
              di imparare l&apos;inglese in modo divertente e coinvolgente. Il
              nostro corso utilizza una varietà di materiali, come video,
              esercizi interattivi e giochi, per rendere l&apos;apprendimento
              un&apos;esperienza piacevole.
            </p>
          </div>
          <div className="p-6 bg-white border-[1px] border-black">
            <i className="mb-4 text-4xl text-blue-500 fas fa-book"></i>
            <h4 className="mb-2 text-lg font-semibold underline  hover:decoration-4 decoration-2 decoration-indigo-500">
              {/* Comprehensive Curriculum */}
              Contenuti personalizzati
            </h4>
            <p className="text-gray-600 italic">
              {/* Access a comprehensive curriculum designed to improve your English
              language skills across all areas. */}
              Adattiamo il corso alle tue esigenze specifiche. Avrai accesso a
              materiali di apprendimento personalizzati che si concentrano sugli
              argomenti che ti interessano di più. In questo modo, potrai
              imparare l&apos;inglese in modo mirato e accelerare il tuo
              progresso.
            </p>
          </div>
          <div className="p-6 bg-white border-[1px] border-black">
            <i className="mb-4 text-4xl text-blue-500 fas fa-users"></i>
            <h4 className="mb-2 text-lg font-semibold underline hover:decoration-4 decoration-2 decoration-sky-500">
              {/* Interactive Learning */}
              Insegnanti qualificati
            </h4>
            <p className="text-gray-600 italic">
              {/* Engage in interactive learning activities that enhance your
              speaking, listening, reading, and writing abilities. */}
              I nostri insegnanti altamente qualificati e madrelingua inglese ti
              guideranno lungo il percorso di apprendimento. Avrai
              l&apos;opportunità di comunicare con loro, fare domande e ricevere
              feedback personalizzato per migliorare le tue abilità
              linguistiche.
            </p>
          </div>
          <div className="p-6 bg-white border-[1px] border-black">
            <i className="mb-4 text-4xl text-blue-500 fas fa-certificate"></i>
            <h4 className="mb-2 text-lg font-semibold underline hover:decoration-4 decoration-2 decoration-green-400">
              {/* Certification */}
              Flessibilità di orario
            </h4>
            <p className="text-gray-600 italic">
              {/* Receive a certification upon completion of the course, validating
              your English language proficiency. */}
              Il nostro corso è progettato per adattarsi al tuo stile di vita.
              Puoi accedere alle lezioni e al materiale di apprendimento quando
              è più comodo per te. Non ci sono vincoli di orario, quindi puoi
              studiare a tuo ritmo e dal luogo che preferisci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
