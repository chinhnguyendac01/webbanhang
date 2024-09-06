import React from 'react';
import styles from './Vision.module.scss';
import defaultImage from 'assets/images/default_image.png'
function Vision(props) {
    return (
        <div className={styles['vision']}>
            {/* <div className={styles['image-canvas']}>
                <div className={`${styles['image-section']} ${styles['one']}`}>
                    <div className={styles['image']}>
                        <img src={visionImg}></img>
                    </div>
                </div>
                <div className={`${styles['image-section']} ${styles['two']}`}>
                    <div className={styles['image']}>
                        <img src={visionImg}></img>
                    </div>
                </div>
                <div className={`${styles['image-section']} ${styles['three']}`}>
                    <div className={styles['image']}>
                        <img src={visionImg}></img>
                    </div>
                </div>
            </div> */}
            <div className={styles['image']}>
                <img src={props?.image || defaultImage}></img>
            </div>
            {/* <div className={styles['blank']}></div> */}
            <div className={styles['content']}>
                {/* <div className={styles['title']}>{props.visionTitle}</div>
                <div className={styles['text']}>{props.visionText}</div>
                <div className={styles['title']}>{props.missionTitle}</div>
                <div className={styles['text']}>{props.missionText}</div> */}
                <div style={{ padding: "0px", overflow: "unset" }} className="view ql-editor" dangerouslySetInnerHTML={{ __html: props?.content }} />
            </div>
        </div >
    );
}

Vision.defaultProps = {
    // visionTitle: `ビジョン`,
    // visionText: `TOP LOOP グループは、ソフトウェアやシステム開発を通して日本とベトナムの未来を作ります。そしてお客様の満足と社員の幸せになるためにIT分野のトップ企業に挑戦します。`,
    // missionTitle: `ミッション`,
    // missionText: `私たちはプロフェッショナル集団のチームワークで最高のパーフォマンスを提供します。`,
}

export default Vision;