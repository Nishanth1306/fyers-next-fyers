import Feature from "./Feature";

export default function Features({
  features,
  featuresPerRow = 3,
  mobileFeaturesPerRow = 2,
  alignIncompleteRow = false,
}) {
  const featureRows = [];
  for (let i = 0; i < features.length; i += featuresPerRow) {
    featureRows.push(features.slice(i, i + featuresPerRow));
  }

  const mobileFeatureRows = [];
  for (let i = 0; i < features.length; i += mobileFeaturesPerRow) {
    mobileFeatureRows.push(features.slice(i, i + mobileFeaturesPerRow));
  }

  return (
    <div>
      {/* Desktop rows */}
      {featureRows.map((row, rowIndex) => {
        const isIncompleteRow = row.length < featuresPerRow;

        return (
          <div
            key={rowIndex}
            className={`hidden md:block relative border-t border-b border-[#C5C6CA] ${
              rowIndex > 0 ? "mt-6 md:mt-8" : ""
            }`}
          >
            <div className="custom-container md:px-[40px] lg:px-[72px] flex justify-center">
              <div
                className={`w-full ${
                  featuresPerRow === 2
                    ? "grid grid-cols-2 gap-8"
                    : isIncompleteRow
                    ? "flex justify-center gap-8"
                    : "grid grid-cols-3 gap-8"
                }`}
              >
                {row.map((feature) => (
                  <div key={feature.heading} className="w-full">
                    <Feature
                      imageSrc={feature.imageSrc}
                      heading={feature.heading}
                      description={feature.description}
                      mobileImageHeight={`h-[190px]`}
                      imageHeight={
                        row.length === 2 ? "lg:h-[422px]" : row.length === 3 ? "lg:h-[300px]" : "lg:h-[422px]"
                      }
                      textHeight={feature.textHeight}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Mobile rows - 2 per row */}
      <div className="md:hidden flex flex-col gap-[16px]">
        {mobileFeatureRows.map((row, rowIndex) => (
          <div key={rowIndex} className={`border-[#C5C6CA] border-b border-t`}>
            <div
              className={`grid gap-0 overflow-hidden ${
                row.length === 1 ? "grid-cols-1 justify-items-center px-[20px]" : "grid-cols-2 px-[12px]"
              }`}
            >
              {row.map((feature, featureIndex) => (
                <Feature
                  key={feature.heading}
                  imageSrc={feature.imageSrc}
                  heading={feature.heading}
                  description={feature.description}
                  isFirstInMobileRow={featureIndex === 0}
                  mobileImageHeight={mobileFeaturesPerRow === 1 ? "h-[280px]" : "h-[190px]"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
