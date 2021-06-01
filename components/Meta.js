import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,700,wght@700;1,400&display=swap" rel="stylesheet" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'DCA',
  keywords: 'DRUGS, Controller',
  description: 'DRUGS CONTROLLERS',
}

export default Meta