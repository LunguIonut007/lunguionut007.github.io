const features = [
  {
    name: 'Professional experience',
    description:
      'I\'am a fullstack programmer with 5 year of experience and a love of coding. I\'ve worked on multiple projects, including a learning platform and in the fintech industry.',
    icon: 'i',
  },
  {
    name: 'Java & Spring',
    description:
      'I have work experience in java, spring, hibernate and the entire spring boot ecosystem. Started dabbing in go / java quarkus for Cloud Native Application projects',
    icon: 'i',
  },
  {
    name: 'React',
    description:
      'I\'ve fallen in love with react and it\'s ecosystem since react 13. Mobx state tree will rule the global state war.',
    icon: 'i',
  },
  {
    name: 'React native',
    description:
      'I\'ve build mobile applications using react native on both ios and android.',
    icon: 'i',
  },
  {
    name: 'Dev ops',
    description:
      'AWS, but digital ocean rules for hobby projects. Fan of let\'s encrypt, nginx, caddy and docker.',
    icon: 'i',
  },
  {
    name: 'What about X?',
    description:
      'Kafka, rabbitmq, microservices, grafana, prometheus, docker, k8, and other buzz words.',
    icon: 'i',
  },
]

export default function Experience() {
  return (
    <div style={{ height: '70vh' }} className="overflow-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Languages, tools and experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           “Any sufficiently advanced technology is indistinguishable from magic.” (Arthur C. Clarke)
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}