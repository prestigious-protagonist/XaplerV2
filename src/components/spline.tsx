import Spline from '@splinetool/react-spline';

export default function ImageComponent() {
  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="w-[1200px] h-[1200px] ">
        <Spline scene="https://prod.spline.design/TlieZHs0fT1kOwaU/scene.splinecode" style={{ pointerEvents: 'none' }} />
      </div>
    </main>
  );
}
