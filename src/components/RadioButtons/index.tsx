import * as React from 'react'
import styles from './index.module.css'

interface IProps {
  sliderSerialNum?: number
  setSliderSerialNum: React.Dispatch<React.SetStateAction<number>>
}

export const RadioButtons: React.FC<IProps> = ({
  sliderSerialNum,
  setSliderSerialNum
}) => {
  return (
    <div className={styles.group}>
      <CustomRadio
        range={0}
        checked={0 === sliderSerialNum}
        setSliderSerialNum={setSliderSerialNum}
      />
      <CustomRadio
        range={1}
        checked={1 === sliderSerialNum}
        setSliderSerialNum={setSliderSerialNum}
      />
      <CustomRadio
        range={2}
        checked={2 === sliderSerialNum}
        setSliderSerialNum={setSliderSerialNum}
      />
    </div>
  )
}

const curStyle = (checked: boolean) =>
  (checked ? [styles.default, styles.active] : [styles.default]).join(' ')

interface ICustomRadioProps extends IProps {
  range: number
  checked: boolean
}

const CustomRadio = ({
  range,
  checked,
  setSliderSerialNum
}: ICustomRadioProps) => (
  <div
    onClick={() => setSliderSerialNum(range)}
    className={curStyle(checked)}
  ></div>
)
