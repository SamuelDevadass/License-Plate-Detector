import math

def calculate_bill_amount(total_seconds: float, vehicle_type: str) -> float:
    total_hours = math.ceil(total_seconds / 3600)
    base_amount = 40 if vehicle_type == "Four Wheeler" else 20
    if total_hours <= 3:
        extra_cost = 0
    elif 3 > total_hours < 4:
        extra_cost = 0.30 * (total_hours - 3)
    elif 4 <= total_hours < 5:
        extra_cost = 0.30 + (0.40 * (total_hours - 4))
    else:
        extra_cost = 0.30 + 0.40 + (0.50 * (total_hours - 5))

    return base_amount + extra_cost
