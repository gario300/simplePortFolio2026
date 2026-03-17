'use client'
import Image from "next/image"
import { TechnologieCardProps } from "./TechnologieCard.model"
import { useTechnologieCardController } from "./TechnologieCard.controller"

function TechnologieCard({ image, name, url, experience, description }: TechnologieCardProps) {
  const { currentExperience, elementRef } = useTechnologieCardController(experience);

  return (
    <div className="card" ref={elementRef}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <Image
                src={image}
                alt={'image_for_' + name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </figure>
          </div>
          <div className="media-content">
            <a
              className="title is-4"
              href={url}
              target="_blank"
            >
              {name}
            </a>
            <p className="subtitle is-6">{description}</p>
          </div>
        </div>

        <div className="content">
          <progress className="progress is-link mt-2" value={currentExperience} max="100">
            {currentExperience + '%'}
          </progress>
        </div>
      </div>
    </div>
  )
}

export default TechnologieCard
