import Image from "next/image"
import { PortFolioItemCardProps } from "./PortFolioItemCard.model"
import styles from "./PortFolioItemCard.module.css"

function PortFolioItemCard({ image, name, description, technologies }: PortFolioItemCardProps) {
  return(
    <div className={`card ${styles.card}`}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className={`image ${styles.imageContainer}`}>
              <Image
                src={image}
                alt={'image_for_' + name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">
              {name}
            </p>
            <p className="subtitle is-6">{description}</p>
            <div className={styles.tags}>
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