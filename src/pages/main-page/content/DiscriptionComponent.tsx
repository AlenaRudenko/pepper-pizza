import "./styles.css";

export default function DicriptionComponent() {
  return (
    <div className='discription__container'>
      <div className='discription__pizza'>Тонкое</div>
      <div className='discription__pizza'>Традиционное</div>
      <div className='discription__pizza discription__width'>26см</div>
      <div className='discription__pizza discription__width'>30см</div>
      <div className='discription__pizza discription__width'>40см</div>
    </div>
  );
}
