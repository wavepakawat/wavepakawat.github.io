/** Animated, low-intensity color blobs + dark veil behind the page content. */
export function Background() {
  const blob =
    "absolute h-[42vw] w-[42vw] rounded-full blur-[110px] mix-blend-screen animate-float motion-reduce:animate-none";
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "radial-gradient(circle at 50% 0%, #1a1140 0%, var(--color-bg) 55%)" }}
      aria-hidden="true"
    >
      <span className={`${blob} -left-[6%] -top-[8%] bg-purple opacity-[0.26]`} />
      <span className={`${blob} -right-[10%] top-[18%] bg-pink opacity-[0.22] [animation-delay:-4s]`} />
      <span className={`${blob} bottom-[-12%] left-[12%] bg-cyan opacity-[0.18] [animation-delay:-8s]`} />
      <span className={`${blob} bottom-[8%] right-[6%] bg-orange opacity-[0.16] [animation-delay:-12s]`} />
      {/* veil for steady contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,10,31,.35) 0%, rgba(14,10,31,.62) 100%)",
        }}
      />
    </div>
  );
}
