import elizangelaImage from "../../assets/elizangela-teles.jpeg";
import styles from "./about.module.css";

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={elizangelaImage} alt="Elizangela Teles" />
          <div className={styles.crp}>
            <span>CRP</span>
            <span className={styles.emphasis}>03/25337</span>
          </div>
        </div>

        <div className={styles.text}>
          <div className={styles.title}>
            <h4>Minha história</h4>
            <h2>Dra. Elizangela Teles</h2>
          </div>

          <div className={styles.history}>
            <p>
              Sou psicóloga formada pela UNINASSAU, com pós-graduação pela
              UNIFAVENI e especialização na Nova NR-1 pela EB Educação. Possuo
              mais de 4 anos de experiência clínica, com mais de 500 pacientes
              atendidos.
            </p>

            <p>
              Resido em Salvador/BA, cidade marcada pela diversidade cultural,
              social e religiosa, contexto que influencia diretamente meu olhar
              sobre o ser humano e a saúde mental. Desde a graduação, dedico-me
              a compreender não apenas os processos emocionais e
              comportamentais, mas também o impacto das questões sociais no
              adoecimento psíquico.
            </p>

            <p>
              Durante minha formação, desenvolvi projetos em saúde mental de
              homens, mulheres, crianças e cuidadores, além de estágios em
              abrigos e casas de acolhimento, experiências que fortaleceram uma
              prática clínica ética, humanizada e comprometida com o cuidado
              psicológico sem discriminação de raça, cor, etnia, religião ou
              orientação sexual.
            </p>

            <p>
              Atendo crianças, adolescentes e adultos, trabalhando demandas como
              ansiedade, depressão, bullying, relacionamentos, alta cobrança,
              abuso sexual, violência doméstica e ideação suicida, sempre com
              sigilo, embasamento científico e supervisão profissional.
            </p>

            <p>
              Atualmente, realizo atendimentos exclusivamente online,
              possibilitando acompanhamento em todo o Brasil, com flexibilidade
              de horários e no conforto do paciente. Utilizo a Terapia
              Cognitivo-Comportamental (TCC), auxiliando na identificação e
              mudança de padrões de pensamento e comportamento, promovendo
              redução de sintomas e melhora da qualidade de vida.
            </p>

            <p>
              Acredito que o indivíduo não está dissociado do seu contexto
              social e, por isso, mantenho constante atualização profissional,
              buscando oferecer um atendimento alinhado à realidade e às
              necessidades de cada paciente.
            </p>
          </div>

          <div>
            <a href="" className={styles.link}>
              agende aqui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
