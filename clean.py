import pandas as pd
import numpy as np

# Load dataset
df = pd.read_csv("thyroidDF.csv")

# Replace '?' with NaN
df.replace('?', np.nan, inplace=True)

# Keep only important columns (reduced)
df = df[['TSH', 'T3', 'TT4', 'FTI', 'target']]

# Convert to numeric
for col in ['TSH', 'T3', 'TT4', 'FTI']:
    df[col] = pd.to_numeric(df[col], errors='coerce')

# Drop missing values
df.dropna(inplace=True)

# Map target labels
def map_target(value):
    if value == '-':
        return 0  # Normal
    elif str(value).startswith(('A', 'B', 'C', 'E')):
        return 2  # Hyperthyroid
    else:
        return 1  # Hypothyroid

df['target'] = df['target'].apply(map_target)

# Save cleaned dataset
df.to_csv("new_cleaned_thyroid_reduced.csv", index=False)

print("Reduced dataset ready!")
print(df.head())