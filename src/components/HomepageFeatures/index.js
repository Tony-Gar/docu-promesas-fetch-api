import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bienvenido a la Documentación',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Esta documentación te ayudará a entender los aspectos clave de nuestro proyecto, desde su instalación hasta su uso avanzado.
        Exploraremos todo lo que necesitas saber para trabajar de manera efectiva.
      </>
    ),
  },
  {
    title: 'Organizada y Eficiente',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hemos organizado la documentación para que puedas enfocarte en lo más importante. Todo está dividido en secciones claras y fáciles de seguir.
        Simplemente dirígete a la sección que necesites en el menú.
      </>
    ),
  },
  {
    title: 'Flexible y Extensible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nuestra documentación está creada con tecnologías modernas como React, lo que facilita su personalización y expansión conforme a tus necesidades.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className={styles.mainHeading}>Documentación del Proyecto</Heading>
        <p className={styles.introText}>
          Esta es la página principal de nuestra documentación. Aquí encontrarás todo lo que necesitas para comenzar a explorar y comprender nuestro proyecto.
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
