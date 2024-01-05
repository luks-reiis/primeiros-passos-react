"use client"

const Title = ({label}: {label: string}) => {
  return (
    <h1 className="text-4xl font-bold my-4">{label}</h1>
  );
}

const Subtitle = ({label}: {label: string}) => {
  return (
    <p>{label}</p>
  );
}

const Header = ({title, subtitle}: {title: string; subtitle: string;}) => {
  return (
    <header>
      <Title label={title}/>
      <Subtitle label={subtitle}/>
    </header>
  );
}

function Page(){
  const pageInfo = {
    title: 'Um título qualquer',
    subtitle: 'Um subtítulo qualquer'
  }

  return (
    <div className="container mx-auto">
      <Header
        title={pageInfo.title}
        subtitle={pageInfo.subtitle}
      />
    </div>
    );
}

export default Page;