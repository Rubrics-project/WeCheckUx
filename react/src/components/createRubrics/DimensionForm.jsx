export default function DimensionForm({
  title_value,
  title_onChange,
  description_value,
  description_onChange,
}) {
  return (
    <>
      <hr className=" border-color-grey-bg border-2 mb-2" />
      <div className="px-3">
        <label
          htmlFor="dimension"
          className="font-opencustom text-xs font-bold"
        >
          Dimensión:
        </label>
        <input
          type="text"
          id="dimension"
          name="dimension"
          value={title_value}
          onChange={title_onChange}
          placeholder="Dimensión"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2 mb-4"
        />

        <label htmlFor="description" className="font-opencustom text-xs">
          Descripción de la dimensión:
        </label>

        <textarea
          type="text"
          id="description"
          name="description"
          value={description_value}
          onChange={description_onChange}
          placeholder="Descripción"
          className="w-full rounded border border-color-grey-border-btn px-3 py-3 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-xs mt-2"
        />
      </div>
    </>
  );
}
