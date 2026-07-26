export default function PlateChip({ value, size = "md" }) {
  const hasValue = value && value.trim().length > 0;
  const classes = ["plate-chip"];
  if (size === "sm") classes.push("plate-chip--sm");
  if (!hasValue) classes.push("plate-chip--empty");

  return (
    <span className={classes.join(" ")}>
      <span className="plate-chip__bolt" />
      {hasValue ? value.toUpperCase() : "NO PLATE"}
      <span className="plate-chip__bolt" />
    </span>
  );
}
