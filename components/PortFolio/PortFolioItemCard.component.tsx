'use client'
import Image from "next/image"
import { PortFolioItemCardProps } from "./PortFolioItemCard.model"
import { usePortFolioItemCardController } from "./PortFolioItemCard.controller"
import { cardStyles, imageContainerStyles, tagsStyles } from "./PortFolioItemCard.styles"

function PortFolioItemCard({ image, name, description, technologies }: PortFolioItemCardProps) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = usePortFolioItemCardController();

  return(
    <div 
      className="card"
      style={cardStyles(isHovered)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image" style={imageContainerStyles(isHovered)}>
              <Image
                src={image}
                alt={'image_for_' + name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </figure>
          </div>
          <div className="media-content">
            <p
              className="title is-4"
            >
              {name}
            </p>
            <p className="subtitle is-6">{description}</p>
            <div style={tagsStyles(isHovered)}>
              {
                technologies.map((tech: string, index: number) => {
                  return (
                    <span className="tag is-primary" key={index}>
                      {tech}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="content">
        </div>
      </div>
    </div>
    
  )
}

export default PortFolioItemCard
